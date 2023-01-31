import storage from 'node-persist'

export const Text2imageHandler = async (data) => {
  const currentImgs = await storage.getItem('txt2img')
  let newImages = []
  if (currentImgs) {
    newImages = [...currentImgs, data]
  } else {
    newImages = [data]
  }

  await storage.setItem('txt2img', newImages)
  return newImages
}
