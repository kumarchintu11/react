

// continuously react mein asie hi tree bnte rehte hai hr ek elements ka.
function customRender(reactElement, container){
    /*const domElement = document.createElement
    (reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)*/


    // version 2
    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if (prop == 'children') continue ;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a', // type of element
    props: {
        href: "htts://google.com",
        target:'_blank'
    },
    children: 'click me to visit google'
}



// select the root in the index.html
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)

