function weather(event) {
    event.preventDefault()
    
    const input = document.getElementById("inputbox")
    const search = document.getElementById("searchbutton")
    const div = document.getElementById("cointainer")
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=76382ca1cad6f07aef1320e585484d96&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const name=data.name
        const icon= data.weather[0].icon
        const temp= data.main.temp
        const hum= data.main.humidity
        const speed=data.wind.speed
       
        
        
        
        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <table>
                <tr>
                    <td class="fs-3">city</td>
                    <td class="text-white"> ${name}</td>
                </tr>
                <tr>
                    <td class="fs-3">temperature</td>
                    <td class="text-white"> ${temp}\u00B0c</td>

                    </tr>
                <tr>
                    <td class="fs-3">humidity</td>
                    <td class="text-white"> ${hum}%</td>
                </tr>
                 <tr>
                    <td class="fs-3">windSpeed</td>
                    <td class="text-white"> ${speed}km/h</td>
                </tr>


            </table>
        

        `
        
        console.log(input.value)
            }
        )
}

