import xml2js from 'xml2js';
const parser = new xml2js.Parser({
  attrkey: "ATTR"
});
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//get XML api
const getXML = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

const infoUrl = 'https://stream2.svrdedicado.org/8316/stats'  
export default function handler(req, res) {

  getXML(infoUrl).then(data => {
      parser.parseString(data, function (error, result) {
        if (error === null) {
          res.status(200).json({
            ouvintes: result.SHOUTCASTSERVER.UNIQUELISTENERS[0],
            locutor: result.SHOUTCASTSERVER.SERVERTITLE[0],
            programa: result.SHOUTCASTSERVER.SERVERGENRE[0],
            musica: result.SHOUTCASTSERVER.SONGTITLE[0]
          });
  
        } else {
          res.status(500).json({
            error: 'Erro ao consumir API'
          });
        }
      });
  });
}