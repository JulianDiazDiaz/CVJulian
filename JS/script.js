

function displayContent() {
var displayContent = 'block'
var hideContent = 'none'
var switchContentDisplay = document.querySelectorAll('.query-hide')
var displaymore = document.getElementById('displaymore').innerHTML
switchContentDisplay.forEach((e) => {
    if (e.style.display == hideContent){
        e.style.display = displayContent
            document.getElementById('displaymore').innerHTML = 'LESS...'
    }
    else {
        e.style.display = hideContent
            document.getElementById('displaymore').innerHTML = 'MORE...'
    }
});
}


function displayContentWorkPhone() {
    var displayContent = 'block'
    var hideContent = 'none'
    var switchContentDisplay = document.querySelectorAll('.query-hide2')
    switchContentDisplay.forEach((e) => {
        if (e.style.display == hideContent){
            e.style.display = displayContent
                document.getElementById('displaymore2').innerHTML = 'LESS...'
        }
        else {
            e.style.display = hideContent
                document.getElementById('displaymore2').innerHTML = 'MORE...'
        }
    });
    }

    function displayContentEduPhone() {
        var displayContent = 'block'
        var hideContent = 'none'
        var switchContentDisplay = document.querySelectorAll('.query-hide1')
        switchContentDisplay.forEach((e) => {
            if (e.style.display == hideContent){
                e.style.display = displayContent
                    document.getElementById('displaymore1').innerHTML = 'LESS...'
            }
            else {
                e.style.display = hideContent
                    document.getElementById('displaymore1').innerHTML = 'MORE...'
            }
        });
        }

        function displayContentSkillsPhone() {
            var displayContent = 'block'
            var hideContent = 'none'
            var switchContentDisplay = document.querySelectorAll('.query-hide3')
            switchContentDisplay.forEach((e) => {
                if (e.style.display == hideContent){
                    e.style.display = displayContent
                        document.getElementById('displaymore3').innerHTML = 'LESS...'
                }
                else {
                    e.style.display = hideContent
                        document.getElementById('displaymore3').innerHTML = 'MORE...'
                }
            });
            }

const counters = document.querySelectorAll('.bar');
const speed = 800;

counters.forEach(counter => {
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if(count < target)  {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 2);
        } else{
            count.innerText = target;
        }
    }
    updateCount();
})


