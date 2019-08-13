var queryStrings = {
    chatbotUI : 'chatbot',
    chatbotPageWrapper : 'chatbot-page-wrapper',
    chatbotOffsetInner :'chatbot-offset-inner',
    chatbotButtonIcon : 'chatbot-button-icon',
    chatbotButtonClose : 'chatbot-close-button',
    chatbotComposer : 'chatbot-conversation-composer',
    chatbotConversationScreen: 'chatbot-holder_conversation-screen'
};

var bodyElem = document.body;
var chatbotButton = document.getElementById(queryStrings.chatbotButtonIcon);
var chatbotButtonClose = document.getElementById(queryStrings.chatbotButtonClose);

// var chatbotComposer = document.getElementById(queryStrings.chatbotComposer);

function toggleQueryStrings() {
    if(true){
        document.querySelector('.'+queryStrings.chatbotUI).classList.toggle(queryStrings.chatbotUI+'-opened');
        document.querySelector('.'+queryStrings.chatbotPageWrapper).classList.toggle(queryStrings.chatbotPageWrapper+'-active');
        document.querySelector('.'+queryStrings.chatbotOffsetInner).classList.toggle(queryStrings.chatbotOffsetInner+'-active');
    }else{
        document.querySelector('.'+queryStrings.chatbotUI).classList.remove(queryStrings.chatbotUI+'-opened');
        document.querySelector('.'+queryStrings.chatbotPageWrapper).classList.remove(queryStrings.chatbotPageWrapper+'-active');
        document.querySelector('.'+queryStrings.chatbotOffsetInner).classList.remove(queryStrings.chatbotOffsetInner+'-active');
    }
}

chatbotButton.addEventListener('click', function () {
    // console.log(bodyElem.className)
    toggleQueryStrings(true);
})

chatbotButtonClose.addEventListener('click', function () {
    toggleQueryStrings(false);
})

// chatbotComposer.addEventListener('keyup', function () {
//     console.log('Typing...');
// })
