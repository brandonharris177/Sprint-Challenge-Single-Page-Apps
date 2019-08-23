import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return(
        <div>
            <div class = "ui attached tabular menu">
                <NavLink class="item" to = {`/`}>Home</NavLink>
                <NavLink class ="item" to = {`/character`}>Characters</NavLink>
                <NavLink class ="item" to = {`/location`}>Location</NavLink>
                <NavLink class ="item" to = {`/episode`}>Epidode</NavLink>
                <NavLink class ="item" to = {`/search`}>Search</NavLink>
            </div>
            <div class="ui bottom attached segment active tab">Home</div>
    </div>
    );
};

