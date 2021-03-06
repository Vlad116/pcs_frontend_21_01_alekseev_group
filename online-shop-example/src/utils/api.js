import { fetchJSON } from './fetchJSON'
// import { host } from '../constants'

export const getData = async (url) => {
	try {
        const data = await fetchJSON(url)
		return data
    } catch (error) {
        console.log(error)
    }
}

export const postData = async (url, method, postData) => {
	try {
        const data = await fetchJSON(
				url,
				{
					method: method,
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(postData)
				}
			)
		return data
    } catch (error) {
        console.log(error)
    }
}

// export const putData = async (url) => {
// 	
// }

export const deleteData = async (url) => {
	
}