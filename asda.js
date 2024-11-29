let r = document.querySelector('#launch')

x = false

function work()
{
    x = !x
    console.log(x);
    
    if(x)
    {
       start()
       r.innerHTML = 'Stop'

    }
    else
    {
       stop()
       r.innerHTML = 'Start'
    }
}

function clean()
{
    text1 = document.querySelector('h1').innerHTML = 0
    text1 = 0
    text = 0
}

 text1 = document.querySelector('h1').getHTML()
 text = eval(text1)
function adding()
{
    text = text + 1
    console.log(text);
    text1 = document.querySelector('h1').innerHTML = text
}


function start()
{ s = setInterval(adding, 1000)}

function stop()
{clearInterval(s)}
