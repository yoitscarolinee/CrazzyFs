import styled from "styled-components";
import Image from 'next/image'
import { IconContext } from "react-icons/lib";
import { AiOutlineReload, AiFillHeart } from 'react-icons/ai';
import { FaHeadphonesAlt, FaPlay } from 'react-icons/fa';
import { useEffect, useState } from "react";

const HeroWrapper = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    background-image: url("./images/Header.png");
    background-size: cover;

    @media (max-width: 1000px) {
        gap: 50px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 600px) {
        height: 500px;
    }
`

const Logo = styled.div`
    width: 450px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    -webkit-filter: drop-shadow(1px 1px 0 white)
                drop-shadow(-1px 1px 0 white)
                drop-shadow(1px -1px 0 white)
                drop-shadow(-1px -1px 0 white);
    filter: drop-shadow(1px 1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -21x 0 white)
        drop-shadow(-1px -1px 0 white);
        user-select: none;

    @media (max-width: 1000px) {
        width: 50%;
        min-width: 300px;
    }
`

const Player = styled.div`

    width: 250px;
    height: 135px;
    position: absolute;
    right: 100px;

    @media (max-width: 1000px) {
        position: relative;
    }

    @media (max-width: 700px) {
        margin-left: 50%;
    }

`

const Personagem = styled.div`

    width: 80px;
    height: 135px;
    background-color: var(--white);
    border-radius: 5px;
    position: absolute;
    left: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & .fundo {
        width: 70px;
        height:120px;
        background-color: #f363b454;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    & .fundo .chao {
        width: 100%;
        height: 85px;
        background-color: #F363B454;
        position: absolute;
    }

    & .fundo .chao .sombra {
        width: 50px;
        height: 20px;
        border-radius: 100%;
        background-color: #49494961;
        position: absolute;
        bottom: -27.5px;
        left: 50%;
        transform: translateX(-50%);
    }

    & .personagem {
        width: 75px;
        height: 130px;
        bottom: 15px;
        position: absolute;
    }

`

const Controles = styled.div`
    width: 250px;
    background-color: var(--white);
    height: 100px;
    top: 20px;
    border-radius 5px;
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & .controles {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70px;
        bottom: 15px;
        left: 100px;
        position: absolute;
    }

    & .nomes {
        font-size: 11px;
        color: var(--main);
        position: absolute;
        left: 100px;
        top: 10px;
    }

    & .locutor {
        font-weight: 700;
        font-size: 12px;
    }

    & .programa {
        font-size: 8px;
        font-weight: 400;
    }

    & .musica {
        font-size: 10px;
        font-weight: 600;
        margin-top: 5px; 
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

`

function playpause() {
    console.log('click');
    console.log(audio.volume);
}


const Hero = () => {

    const [locutor, setLocutor] = useState("");
    const [programa, setPrograma] = useState("");
    const [musica, setMusica] = useState("");

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('api/radio')
            let json = await response.json()
            setLocutor(json.locutor);
            setPrograma(json.programa);
            setMusica(json.musica);
        }

        fetchData();

        setTimeout(() => {
            fetchData();
            console.log('[DEBUG] Player atualizado')
        }, 20000);
    });

    return (<HeroWrapper>

        <Logo>
            <Image
                src="/images/logo_hero.png"
                alt="Logo"
                layout='fill'
                objectFit='contain'
                draggable='false'
            />
        </Logo>

        <Player>

            <Controles>

                <div className="nomes">
                    <p className="locutor">{locutor}</p>
                    <p className="programa">{programa}</p>
                    <p className="musica">{musica}</p>
                </div>

                <div className="controles">

                    <IconContext.Provider value={{ color: 'var(--main)', size: '0.8rem' }}>

                        <a onClick={()=>console.log('funcnionando')}><FaPlay /></a>
                        <AiOutlineReload />
                        <FaHeadphonesAlt />
                        <AiFillHeart />

                    </IconContext.Provider>

                </div>

            </Controles>
            <Personagem>


                <div className="fundo">

                    <div className="chao">

                        <div className="sombra"></div>

                    </div>

                </div>

                <div className="personagem">

                    <Image
                        src="/images/manequim.gif"
                        alt="Manequim"
                        layout='fill'
                        objectFit='contain'
                    />

                </div>

            </Personagem>

            <audio id="audio" autoP lay="" preload="auto" src="https://stream2.svrdedicado.org/8316/stream"></audio>
            <script>
                /**
* @author Deyvid ednaldo da silva <deyvid0123>
* @copyright [Grupo TrueSecurity] Codigo livre para uso.
*/

/*
 * Copyright 2021 TrueSecurity Team.
 * @author deyvid0123 <David ednaldo da silva>
 */
/*jslint browser: true*/
/*global  $*/
const radioInfo = {
    ip: 'https:',
    port: 'stream2.svrdedicado.org',
    idName: '8316'
};

const _0x479d2f=_0x4a51;(function(_0xfac377,_0x233a84){const _0x2b592e=_0x4a51,_0x4982a7=_0xfac377();while(!![]){try{const _0x341930=parseInt(_0x2b592e(0x1e7))/0x1*(-parseInt(_0x2b592e(0x1ee))/0x2)+-parseInt(_0x2b592e(0x1c6))/0x3*(-parseInt(_0x2b592e(0x1e3))/0x4)+parseInt(_0x2b592e(0x1f6))/0x5+parseInt(_0x2b592e(0x1e1))/0x6+parseInt(_0x2b592e(0x1f8))/0x7*(-parseInt(_0x2b592e(0x1d6))/0x8)+-parseInt(_0x2b592e(0x1ca))/0x9+-parseInt(_0x2b592e(0x1f4))/0xa;if(_0x341930===_0x233a84)break;else _0x4982a7['push'](_0x4982a7['shift']());}catch(_0x40eeef){_0x4982a7['push'](_0x4982a7['shift']());}}}(_0x3dcf,0xd8cf3));let audio=function(){const _0x32ab06=_0x4a51,_0x9a009d=function(){let _0x51f16a=!![];return function(_0x4a238c,_0x3515b3){const _0x461eae=_0x51f16a?function(){if(_0x3515b3){const _0x43e479=_0x3515b3['apply'](_0x4a238c,arguments);return _0x3515b3=null,_0x43e479;}}:function(){};return _0x51f16a=![],_0x461eae;};}(),_0x19b98f=_0x9a009d(this,function(){const _0xeda0c1=_0x4a51;return _0x19b98f[_0xeda0c1(0x1cb)]()['search'](_0xeda0c1(0x1ed))[_0xeda0c1(0x1cb)]()[_0xeda0c1(0x1d4)](_0x19b98f)[_0xeda0c1(0x1d3)]('(((.+)+)+)+$');});_0x19b98f();const _0x4be634=function(){let _0x1ecb64=!![];return function(_0x428acf,_0x4def6a){const _0x56dc5d=_0x1ecb64?function(){const _0x4ee768=_0x4a51;if(_0x4def6a){const _0x5dca37=_0x4def6a[_0x4ee768(0x1de)](_0x428acf,arguments);return _0x4def6a=null,_0x5dca37;}}:function(){};return _0x1ecb64=![],_0x56dc5d;};}(),_0x50e6c2=_0x4be634(this,function(){const _0x4e4a52=_0x4a51;let _0x5c052c;try{const _0x15ddcc=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5c052c=_0x15ddcc();}catch(_0x779839){_0x5c052c=window;}const _0x7599ef=_0x5c052c['console']=_0x5c052c[_0x4e4a52(0x1e9)]||{},_0x3dcf59=[_0x4e4a52(0x1d1),'warn',_0x4e4a52(0x1d5),'error','exception',_0x4e4a52(0x1cf),_0x4e4a52(0x1db)];for(let _0x264a97=0x0;_0x264a97<_0x3dcf59[_0x4e4a52(0x1cd)];_0x264a97++){const _0x5b934e=_0x4be634[_0x4e4a52(0x1d4)][_0x4e4a52(0x1f7)][_0x4e4a52(0x1e8)](_0x4be634),_0x5882de=_0x3dcf59[_0x264a97],_0x4a0a29=_0x7599ef[_0x5882de]||_0x5b934e;_0x5b934e[_0x4e4a52(0x1ec)]=_0x4be634[_0x4e4a52(0x1e8)](_0x4be634),_0x5b934e[_0x4e4a52(0x1cb)]=_0x4a0a29[_0x4e4a52(0x1cb)]['bind'](_0x4a0a29),_0x7599ef[_0x5882de]=_0x5b934e;}});return _0x50e6c2(),document[_0x32ab06(0x1df)](_0x32ab06(0x1e5));};const source=audio()[_0x479d2f(0x1f2)];let attemptPlay=0x0;setInterval(function(){const _0x114736=_0x479d2f;if(audio()[_0x114736(0x1d8)][_0x114736(0x1cd)]!==0x1){let _0x3bdb40=audio()[_0x114736(0x1eb)]();_0x3bdb40!==undefined&&_0x3bdb40[_0x114736(0x1f9)](_0x1e29df=>{})[_0x114736(0x1e6)](_0x31499f=>{const _0x49f290=_0x114736;console[_0x49f290(0x1d1)](_0x31499f);});}},0xbb8),setInterval(function(){const _0x439bff=_0x479d2f;(audio()[_0x439bff(0x1d8)][_0x439bff(0x1cd)]!==0x1||audio()[_0x439bff(0x1d9)]===!![])&&(audio()['src']='',audio()[_0x439bff(0x1f2)]=source+_0x439bff(0x1d7)+Date[_0x439bff(0x1f3)](),audio()[_0x439bff(0x1da)]()),attemptPlay++;},0x1388);let truePlayer={'stopCheck':![],'id':radioInfo[_0x479d2f(0x1dd)],'currentTime':0x0,'stepMax':0x3,'stepCurrent':0x0,'intervalTime':0xbb8,'promise':![],'reload':![],'reloadActive':![],'reloadTime':0x1e,'tagAudio':function(){return audio();},'isPlaying':function(_0x178381){const _0x5356dc=_0x479d2f;return!_0x178381[_0x5356dc(0x1cc)];},'checkAutoPlay':function(){const _0x5bc9ff=_0x479d2f;if(truePlayer[_0x5bc9ff(0x1c8)]===!![])return![];let _0xbadf94=this[_0x5bc9ff(0x1e4)](),_0x3a19a5=truePlayer['isPlaying'](_0xbadf94),_0x4d4cb9=_0xbadf94[_0x5bc9ff(0x1c9)];if(_0x3a19a5===![]){if(this[_0x5bc9ff(0x1f1)]!==!![])_0xbadf94[_0x5bc9ff(0x1da)](),this['reloadActive']=!![];else{if(this['stepCurrent']>=this[_0x5bc9ff(0x1ce)]){this[_0x5bc9ff(0x1f1)]=![];let _0x4367b9=_0xbadf94[_0x5bc9ff(0x1eb)]();_0x4367b9!==undefined&&_0x4367b9[_0x5bc9ff(0x1f9)](function(){})[_0x5bc9ff(0x1e6)](function(_0x125d5d){const _0x3a42ad=_0x5bc9ff;console['log'](_0x125d5d),truePlayer[_0x3a42ad(0x1f0)]=!![],$(_0x3a42ad(0x1d2))[_0x3a42ad(0x1d0)]();}),this[_0x5bc9ff(0x1dc)]=0x0;}else this[_0x5bc9ff(0x1dc)]++;}}else{if(_0x4d4cb9===truePlayer[_0x5bc9ff(0x1c9)]){this['reloadActive']=![];let _0x53de8e=_0xbadf94['play']();_0x53de8e!==undefined&&_0x53de8e[_0x5bc9ff(0x1f9)](function(){})[_0x5bc9ff(0x1e6)](function(_0x2344a6){const _0x1c2ac4=_0x5bc9ff;console[_0x1c2ac4(0x1d1)](_0x2344a6),truePlayer[_0x1c2ac4(0x1f0)]=!![],$(_0x1c2ac4(0x1d2))[_0x1c2ac4(0x1d0)]();}),this[_0x5bc9ff(0x1dc)]=0x0;}else truePlayer['promise']===!![]&&($(_0x5bc9ff(0x1d2))['fadeOut'](),this[_0x5bc9ff(0x1f0)]=![]);truePlayer[_0x5bc9ff(0x1c9)]=_0x4d4cb9;}}};$(document)['ready'](function(){const _0x357087=_0x479d2f;setInterval(function(){const _0x3591a3=_0x4a51;truePlayer[_0x3591a3(0x1ef)]();},truePlayer[_0x357087(0x1fa)]);});if(typeof jQuery!=_0x479d2f(0x1f5)){let mainaudio=$(_0x479d2f(0x1c7))[_0x479d2f(0x1e0)]()[0x0],playingOtherPlay=![];$(_0x479d2f(0x1c7))['get']()[0x0]!==undefined&&setInterval(function(){const _0x31c88a=_0x479d2f;function _0x4e04a8(_0x4a2831){const _0x6c418e=_0x4a51;return _0x4a2831&&_0x4a2831['currentTime']>0x0&&!_0x4a2831[_0x6c418e(0x1cc)]&&!_0x4a2831[_0x6c418e(0x1d9)]&&_0x4a2831[_0x6c418e(0x1e2)]>0x2;}if(_0x4e04a8(mainaudio)){let _0x52d40f=$('audio[mainaudio!=true]')['get']();if(_0x52d40f[0x0]!==undefined){let _0x19240c=_0x52d40f[0x0][_0x31c88a(0x1ea)];playingOtherPlay===![]&&(mainaudio[_0x31c88a(0x1ea)]=_0x19240c,_0x52d40f[0x0]['volume']=0x0,playingOtherPlay=!![]);}}else{let _0x871201=$('audio[mainaudio!=true]')[_0x31c88a(0x1e0)]();if(_0x871201[0x0]!==undefined){let _0x3eb2bd=$(_0x31c88a(0x1c7))[_0x31c88a(0x1e0)]()[0x0][_0x31c88a(0x1ea)];playingOtherPlay===!![]&&(mainaudio[_0x31c88a(0x1ea)]=0x0,_0x871201[0x0][_0x31c88a(0x1ea)]=_0x3eb2bd,playingOtherPlay=![]);}}},0x7d0);}function _0x4a51(_0x1c7e28,_0x3c205d){const _0x1a3e0a=_0x3dcf();return _0x4a51=function(_0x13cc5b,_0x2e598f){_0x13cc5b=_0x13cc5b-0x1c6;let _0xebda96=_0x1a3e0a[_0x13cc5b];return _0xebda96;},_0x4a51(_0x1c7e28,_0x3c205d);}function _0x3dcf(){const _0x2dc70c=['get','5660058ZdeRwT','readyState','680hsKAVM','tagAudio','audio','catch','365168fdmWvw','bind','console','volume','play','__proto__','(((.+)+)+)+$','4lpiCrc','checkAutoPlay','promise','reloadActive','src','now','7061760oANVHA','undefined','5271750qXiWFy','prototype','433104GMgXqL','then','intervalTime','19770DCrMiD','[mainaudio]','stopCheck','currentTime','2686086zuWaBy','toString','paused','length','stepMax','table','fadeIn','log','#autopFix','search','constructor','info','64zDtUKQ','?t=','played','ended','load','trace','stepCurrent','idName','apply','getElementById'];_0x3dcf=function(){return _0x2dc70c;};return _0x3dcf();}
            </script>

        </Player>

    </HeroWrapper>);
}

export default Hero;
