import React, {useState} from "react";
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


const [decks, setDecks] = useState([]);
const [deck, setDeck] = useState({});
const [cards, setCards] = useState([]);
const [cardNumber, setCardNumber] = useState(1);





    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home decks={decks} setDecks={setDecks}/>
                    </Route>
                    <Route path="/decks/new">
                        <CreateNewDeck />
                    </Route>
                    <Route exact path="/decks/:deckId">
                        <Deck deck={deck} setDeck={setDeck} cards={cards} setCards={setCards} />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study deck={deck} setDeck={setDeck} 
                        cards={cards} setCards={setCards}
                        cardNumber={cardNumber} setCardNumber={setCardNumber} />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <EditDeck />
                    </Route>
                    <Route path="/decks/:deckId/cards/new">
                        <AddNewCard deck={deck} setDeck={setDeck} />
                    </Route>
                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard deck={deck} setDeck={setDeck} />
                    </Route>
                    <NotFound />
                </Switch>
            </div>
        </>
    );
}

export default Layout;
