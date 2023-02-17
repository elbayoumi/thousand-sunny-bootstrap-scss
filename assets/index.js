
        function minu() {
            let minu = document.querySelector('.minu');
            var x = document.querySelector('.nav-links_and_log_sin');
            if (x.style.display === "block") {
                x.style.display = "none";
                minu.className='minu '

            } else {
                x.style.display = "block";
                minu.className='minu minuw'
            }
        }