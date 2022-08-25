import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./gallery.css";

import { PinkSweats } from "./galleries/PinkSweats";
import { Grady } from "./galleries/Grady";
import { GlassAnimals } from "./galleries/GlassAnimals";
import { Daya } from "./galleries/Daya";
import { Arizona } from "./galleries/Arizona";
import { RichTheKid } from "./galleries/RichTheKid";
import { Blackbear } from "./galleries/Blackbear";
import { RoyWoods } from "./galleries/RoyWoods";
import { MacDeMarco } from "./galleries/MacDeMarco";
import { TwoFriends } from "./galleries/TwoFriends";
import { BigSean } from "./galleries/BigSean";
import { LilDicky } from "./galleries/LilDicky";

export function Gallery(props) {
    const [showPinkSweats, setShowPinkSweats] = useState(false);
    const [showGrady, setShowGrady] = useState(false);
    const [showGlassAnimals, setShowGlassAnimals] = useState(false);
    const [showDaya, setShowDaya] = useState(false);
    const [showArizona, setShowArizona] = useState(false);
    const [showRichTheKid, setShowRichTheKid] = useState(false);
    const [showBlackbear, setShowBlackbear] = useState(false);
    const [showRoyWoods, setShowRoyWoods] = useState(false);
    const [showMacDeMarco, setShowMacDeMarco] = useState(false);
    const [showTwoFriends, setShowTwoFriends] = useState(false);
    const [showBigSean, setShowBigSean] = useState(false);
    const [showLilDicky, setLilDicky] = useState(false);

    setShowPinkSweats(props.current === 'pink');
    setShowGrady(props.current === 'grady');
    setShowGlassAnimals(props.current === 'glass');
    setShowDaya(props.current === 'daya');
    setShowArizona(props.current === 'arizona');
    setShowRichTheKid(props.current === 'rich');
    setShowBlackbear(props.current === 'blackbear');
    setShowRoyWoods(props.current === 'roy');
    setShowMacDeMarco(props.current === 'mac');
    setShowTwoFriends(props.current === 'twofriends');
    setShowBigSean(props.current === 'bigsean');
    setLilDicky(props.current === 'lildicky');

    return (
        <div className="container col-12">
            {showPinkSweats && <PinkSweats /> }
            {showGrady && <Grady /> }
            {showGlassAnimals && <GlassAnimals /> }
            {showDaya && <Daya /> }
            {showArizona && <Arizona /> }
            {showRichTheKid && <RichTheKid /> }
            {showBlackbear && <Blackbear /> }
            {showRoyWoods && <RoyWoods /> }
            {showMacDeMarco && <MacDeMarco /> }
            {showTwoFriends && <TwoFriends /> }
            {showBigSean && <BigSean /> }
            {showLilDicky && <LilDicky /> }
        </div>
    )
}