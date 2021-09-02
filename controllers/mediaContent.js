const fetch = require('node-fetch');
const path = require('path');
const { Storage } = require('@google-cloud/storage');
const { TOKEN_INSTAGRAM_PROFILE } = require('../config');


//Получение фотографий из сетевого хранилища
const storage = new Storage({
  keyFilename: path.join(__dirname, '../strong-host-324218-2a1ed01805ac.json'),
  projectId: 'strong-host-324218',
});

const bucket = storage.bucket('photograph-lobacheva-bucket');

async function getFilesFromBucket() {
  const [files] = await bucket.getFiles({ prefix: 'gallery' });
  return files.filter((item) => {
    if (item.metadata.metadata) {
       return item.metadata
    }
  });
}

const getArrPhotosFromCloud = (req, res) => {
const promise = new Promise(((resolve, reject) => {
  resolve(getFilesFromBucket())
}))
  promise
    .then((data) =>  {
      return data.map((item)=> {
        console.log(item.metadata)
        return item.metadata
      })
    })
    .then((data) => res.status(200).send(data))
    .catch(err => console.log(err))
}


const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

//Получение медиаконтента профиля instagram
const basUrlInstagramProfile = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,username,permalink&access_token=${TOKEN_INSTAGRAM_PROFILE}`;

const getInstagramProfile = (req, res) => fetch(basUrlInstagramProfile, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse)
  .then((data) => res.status(200).send(data))
  .catch((err) => console.log(err.name));

module.exports = { getInstagramProfile, getArrPhotosFromCloud };
