// Supports weights 100-900
// import '@fontsource-variable/inter';


export const Header = () => {
    return (<div className="bg-light-blue-1000 flex shrink-0 w-full h-min flex-col justify-center items-center gap-4 border-r-8 ">
        <div style={{fontFamily: "Inter", fontWeight: "700", fontSize: "72px", lineHeight: "1.2", letterSpacing: "-3.8px", textTransform: "none", textIndent: "0px", textShadow: "none", textDecoration: "none", whiteSpace: "pre-wrap"}} className="shrink-0 
        w-auto h-auto
        whitespace-pre-wrap
        break-words
        max-w-full
        relative
        font-bold
        text-7xl
        leading-tight
        tracking-[-3.8px]
        text-center
        ">
            Sequences of whitespace will collapse.
        </div>
        <div className="image" >
        </div>
        <div className="subText">
            Go from design to site with Framer, the web builder for creative pros.
        </div>
    </div>
    )

}

// <style>
//     .header {
//     background - color: lightskyblue;
//     box-sizing: border-box;
//     flex-shrink: 0;
//     width: 100%;
//     height: min-content; /* 965px */
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 100px 100px 100px 100px;
//     overflow: hidden;
//     position: relative;
//     align-content: center;
//     flex-wrap: nowrap;
//     gap: 50;
//     border-radius: 0px 0px 0px 0px;
//     border-radius: 12px;
//     }


//     .heroText {
//         flex - shrink: 0;
//     width: auto; /* 585px */
//     height: auto; /* 87px */
//     white-space: pre-wrap;
//     word-wrap: break-word;
//     word-break: break-word;
//     max-width: 100%;
//     position: relative;
//     font-weight: 700;
//     font-style: normal;
//     font-family: "Inter", "Inter Placeholder", sans-serif;
//     font-size: 72px;
//     letter-spacing: -3.8px;
//     line-height: 1.2;
//     text-align: center;
//     }
//     .mainImage {
//         flex - shrink: 0;
//     width: 800px;
//     height: 450px;
//     display: block;
//     overflow: hidden;
//     position: relative;
//     aspect-ratio: 1.7777777777777777 / 1;
//     background-image: urlmainImage()
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     border-radius: 20px;
//     }
//     .subText {
//         flex - shrink: 0;
//     width: 100%;
//     height: auto; /* 72px */
//     white-space: pre-wrap;
//     word-wrap: break-word;
//     word-break: break-word;
//     max-width: 100%;
//     overflow: visible;
//     position: relative;
//     font-weight: 500;
//     font-style: normal;
//     font-family: "Inter", sans-serif;
//     color: var(--token-1021654d-251a-4750-952b-de3f7005260e, #888888);
//     font-size: 24px;
//     letter-spacing: -0.7px;
//     line-height: 1.5;
//     text-align: center;
// }
//     }
// </style>