import env from "@/env";


const useChat = () => {
    const BASE_URL = env.chat_url;
    const d = document;
    const t = "script";

    const init = () => {
        const g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
          window.chatwootSDK.run({
            websiteToken: env.chat_key,
            baseUrl: BASE_URL,
          });
        };
    }

    /**
     * valores que deve tener el parametro chatStyle
     * @typedef {('standard' | 'expanded_bubble')} chatStyleType
     */

    /**
     * estilo del chat standard o expanded_bubble
     * @param {chatStyleType} chatStyle 
     */

    const config = (chatStyle) => {
      window.chatwootSettings = {
        type : chatStyle,
        launcherTitle: 'Resolvemos tus dudas'
      }
    }

  return {
        init,
        config

    }
}


export default useChat;



