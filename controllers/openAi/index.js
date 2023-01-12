const  {Configuration, OpenAIApi} = require('openai')


const configuration = new Configuration({
    apiKey:process.env.OPEN_AI_API
})

const openAi = new OpenAIApi(configuration);

const generateImage = async (req,res)=>{

    const { prompt, size } = req.body;

    const imageSize = size ==='small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
    console.log('in')
    try {
        const response = await openAi.createImage({
            prompt:'man on moon',
            n:1,
            size:'1024x1024'
        });

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            success:true,
            data:imageUrl
        })
    } catch (error) {
        
        res.status(400).json({
            success:false,
            error:"The image could not be generated",
            data:error
        })
    }
}


module.exports = {generateImage};