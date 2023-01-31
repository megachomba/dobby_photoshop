import axios from 'axios'

const baseUrl = 'http://127.0.0.1:7860'
const localUrl = 'http://127.0.0.1:3000'

export const getConfig = async () => {
  console.log('getConfig')
  // call url with content-type: application/json
  try {
    const res = await axios.get(`${baseUrl}/config`)
    console.log(res.data)
  } catch (err) {
    console.log(err)
  }

  return
}
export const getModels = async () => {
  try {
    const res = await axios.get(`${baseUrl}/sdapi/v1/sd-models`)
    console.log('getModels', res.data)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const handleGenerateTxt2img = async (model, prompt, negative_prompt) => {
  const payload = {
    enable_hr: false,
    denoising_strength: 0,
    firstphase_width: 0,
    firstphase_height: 0,
    hr_scale: 2,
    //hr_upscaler: "string",
    hr_second_pass_steps: 0,
    hr_resize_x: 0,
    hr_resize_y: 0,
    prompt,
    // styles: [
    //   string
    // ],
    seed: -1,
    subseed: -1,
    subseed_strength: 0,
    seed_resize_from_h: -1,
    seed_resize_from_w: -1,
    sampler_name: 'Euler',
    batch_size: 1,
    n_iter: 1,
    steps: 50,
    cfg_scale: 7,
    width: 512,
    height: 512,
    restore_faces: false,
    tiling: false,
    negative_prompt,
    eta: 0,
    s_churn: 0,
    s_tmax: 0,
    s_tmin: 0,
    s_noise: 1,
    override_settings: {},
    override_settings_restore_afterwards: true,
    script_args: [],
    sampler_index: 'Euler',
    //script_name: ''
  }

  try {
    const res = await axios.post(`${localUrl}/txt2img`, payload)
    //const res = await axios.post(`${baseUrl}/sdapi/v1/txt2img`, payload)
    console.log('handleGenerateTxt2img', res.data)
  } catch (err) {
    console.log(err)
  }
}
