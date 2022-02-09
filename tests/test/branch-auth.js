const { expect } = require('chai')
const { Agent, branch, db, endpoint, util } = require('../lib')

describe('branch', function () {
  let agent

  before(async function () {
    agent = new Agent().auth()
    const dbDefaults = endpoint.db(agent.defaults())
    const dbPath = dbDefaults.path
    await db.createAfterDel(agent, dbPath)
  })

  after(async function () {
    const dbDefaults = endpoint.db(agent.defaults())
    const dbPath = dbDefaults.path
    await db.del(agent, dbPath)
  })

  it('fails on bad origin descriptor', async function () {
    const { path } = endpoint.branch(agent.defaults())
    const originDescriptor = 'desc-' + util.randomString()
    const r = await agent
      .post(path)
      .send({ origin: originDescriptor })
      .then(branch.verifyFailure)
    expect(r.body['api:error']['@type']).to.equal('api:BadOriginAbsoluteDescriptor')
    expect(r.body['api:error']['api:absolute_descriptor']).to.equal(originDescriptor)
  })

  it('succeeds on creating a branch with prefixes', async function () {
    const { path, orgName, dbName } = endpoint.branch(agent.defaults())
    const newBranch = util.randomString()
    await agent.post(`${path}/local/branch/${newBranch}`)
      .send({
        origin: `/${orgName}/${dbName}/local/branch/main`,
        prefixes:  { doc: "https://terminushub.com/document",
                     scm: "https://terminushub.com/schema"}
      }).then(branch.verifySuccess)
    // It would be nice if it actually verified with a query that the
    // branch is created
  })

  it('fails on unknown origin database', async function () {
    const { path, orgName, dbName } = endpoint.branch(agent.defaults())
    const originDbName = 'origin-' + dbName
    const r = await agent
      .post(path)
      .send({ origin: `${orgName}/${originDbName}` })
      .then(branch.verifyFailure)
    expect(r.body['api:error']['@type']).to.equal('api:UnknownOriginDatabase')
    expect(r.body['api:error']['api:organization_name']).to.equal(orgName)
    expect(r.body['api:error']['api:database_name']).to.equal(originDbName)
  })
})
