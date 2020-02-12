
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex

		var bodyText = document.getElementsByTagName('body')[0].innerText; // Get all the text in body
		// console.log(str);


		str = bodyText.match( /[^\.!\?]+[\.!\?]+/g ) // Split it into sentences

		    str.forEach(function (item, index) {     

		        var word = item.match(/\S+/g).length; // split sentence to words and count the words

		            if (word > 20) { 
		                // var dat = [item, word];
		                // console.log(item, word);
		                // console.log(dat);
		               
		                
		                document.body.innerHTML = document.body.innerHTML.replace(item, "<span style='background:yellow'>"+item+"</span>");



						// var hasText = str.indexOf(item)!==-1;
						// if (hasText) {
						//     alert("a");
						// } else {
						//     alert("b");
						// }


		            }
		        
		    });


		var paragraphs = document.getElementsByTagName('p') // get all paragraphs
		console.log(paragraphs);


    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
  
 		document.getElementById( 'loading-gif' ).style.display = 'none';

 		document.getElementById( 'completed-gif' ).style.display = 'list-item';


 		// var elem = document.getElementById('completed-gif');
 		// elem.style.visibility = 'visible';



    });