const updateHour = () => {
    let date = new Date(),
        hours = date.getHours(),
        ampm,
        minutes = date.getMinutes(),
        seconds =  date.getSeconds(),
        dayOfWeek = date.getDay(),
        day = date.getDate()
        month = date.getMonth(),
        year = date.getFullYear()

    let pHours = document.getElementById('hours'),
        pAMPM = document.getElementById('ampm'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pDayOfWeek = document.getElementById('dayOfWeek'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year')
    
    let week = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

        months = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December']

    pDayOfWeek.textContent = week[dayOfWeek]
    pDay.textContent = day
    pMonth.textContent = months[month]
    pYear.textContent = year

    /* Convert clock from 24h to 12h */
    if (hours >= 12) {
        hours = hours - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }

    if (hours === 0) hours = 12

    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds

    pHours.textContent = hours
    pAMPM.textContent = ampm
    pMinutes.textContent = minutes
    pSeconds.textContent = seconds

}

updateHour()
let interval = setInterval(updateHour, 1000)