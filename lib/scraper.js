import axios from 'axios';
import cheerio from 'cherio'

async function getHTML(url){
    const { data:html } = await axios.get('https://www.twitter.com/wesbos/');
    return html;
}
async function getTwitterFollowers(html){
const $ = cheerio.load(html);
const span = $('[data-nav="following"].ProfileNav-value');
console.log(span.data());

}


export  { getHTML, getTwitterFollowers }