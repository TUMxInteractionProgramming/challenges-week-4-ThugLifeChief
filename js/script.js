/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel = SevenContinents;
var currentLocation = {longitude: 47.450376, latitiude: 9.920552, what3words: "wurden.filmstar.ungeheuer"};

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch

    currentChannel = channelName;

    console.log("Turning in to channel");
    console.log(channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="https://map.what3words.com/'+channelName.createdBy+'" target="_blank"><strong>'+channelName.createdBy+'</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').attr("class",channelName.starred ? 'fas fa-star': 'far fa-star');
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
    console.log("test");
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass("far");
    $('#channel-star').toggleClass("fas");
    currentChannel.starred = !currentChannel.starred;
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

// message bar
function sendMessage() {
   var inputmessage = new Message($('#message-input').val());
   console.log(Message);
   var messagestring = createMessageElement(inputmessage);
   $('#messages').append(messagestring);
   $('#message-input').val('');
}

function createMessageElement(messageObject){
   return '<div class="message"><h3><a href="http://w3w.co/'+messageObject.createdBy+'" target="_blank"><strong>'+messageObject.createdBy+'</strong></a>'+messageObject.createdOn+' <em>:expiresIn: min. left</em></h3><p>'+messageObject.text+'</p><button>+5 min.</button></div>' 
}