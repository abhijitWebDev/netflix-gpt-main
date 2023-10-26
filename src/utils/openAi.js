import OpenAI from 'openai';
import conf from '../conf/conf.js';




const openai = new OpenAI({
    apiKey: conf.openAIKey, dangerouslyAllowBrowser: true// defaults to process.env["OPENAI_API_KEY"]
  });
export default openai;

