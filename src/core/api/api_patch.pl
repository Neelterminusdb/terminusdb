:- module(api_patch, [api_patch/5,api_diff/5]).

:- use_module(core(util)).
:- use_module(core(document)).

api_patch(_System_DB, _Auth, Patch, Before, After) :-
    % no auth yet.
    simple_patch(Patch,Before,After).

api_diff(_System_DB, _Auth, Before, After, Diff) :-
    % no auth yet.
    simple_diff(Before,After,Diff).

