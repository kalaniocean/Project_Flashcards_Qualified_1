import React from "react";
import { Switch, Route} from "react-router-dom";

import Header from "./Header";
import Home from "../Home";
import CreateNewDeck from "../CreateNewDeck";
import Deck from "../Deck";
import Study from "../Study";
import EditDeck from "../EditDeck";
import AddNewCard from "../AddNewCard";
import EditCard from "../EditCard";
import NotFound from "./NotFound";

function Layout() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/decks/new">
                        <CreateNewDeck />
                    </Route>
                    <Route exact path="/decks/:deckId">
                        <Deck />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <EditDeck />
                    </Route>
                    <Route path="/decks/:deckId/cards/new">
                        <AddNewCard />
                    </Route>
                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard />
                    </Route>
                    <NotFound />
                </Switch>
            </div>
        </>
    );
}

export default Layout;
