const days_el = document.getElementById('days')
        const hours_el = document.getElementById('hours')
        const minutes_el = document.getElementById('minutes')
        const seconds_el = document.getElementById('seconds')

        function countDown(){
            const today = new Date().getTime()
            const newyear = new Date(`1/1/${new Date().getFullYear()+1}`).getTime()
            let leftTime = Math.floor((newyear - today) / 1000)

            const days = 24*60*60
            const hours = 60*60
            const minutes = 60

            days_el.innerText = Math.floor(leftTime/days)

            leftTime = Math.floor(leftTime%days)

            hours_el.innerText = Math.floor(leftTime/hours)

            leftTime = Math.floor(leftTime%hours)
            
            minutes_el.innerText = Math.floor(leftTime/minutes)

            leftTime = Math.floor(leftTime%minutes)

            seconds_el.innerText = Math.floor(leftTime)
        }
        countDown()
        setInterval(countDown, 1000)
