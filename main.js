
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const lotitude = position.coords.lotitude
        const getWheaher = () => {
            fetch(`https://api.weatherapi.com/v1/current.json?key=758ff42a1a864ef7af5121817240106&q=${latitude},${longitude}&lang=pt`)
                .then((response) => {
                    return response.json()
                })
                .then((response) => console.log(response))

            console.log(res.location.name)
            console.log(res.current.temp_c)
            console.log(res.current.feelslike_c)
            console.log(res.current.condition.wind_kph)

            const condicao = document.createElement('p')
            condicao.innerHTML = res.current.conditio.text

            document.querySelector('.dados').appendChild(condicao)

        }
        getWheaher()
    })



})





















