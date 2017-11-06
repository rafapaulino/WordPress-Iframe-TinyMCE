(function() {
    tinymce.PluginManager.add( 'iframe', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('iframe', {
	        title: 'Insert Iframe, YouTube/Vímeo Vídeos',
	        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-youtube-20.png',
	        onclick: function () {
	            editor.windowManager.open({
	                title: 'Insert Iframe Bellow',
	                width : 400,
	                height : 300,
	                body: [
	                  {
	                    type: 'textbox',
	                    size: 20,
	                    name: 'url',
	                    label: 'Url'
	                  },
	                  {
	                    type: 'textbox',
	                    size: 10,
	                    name: 'width',
	                    label: 'Width',
	                    value: '100'
	                  },
	                  {
	                    type: 'textbox',
	                    size: 10,
	                    name: 'height',
	                    label: 'Height',
	                    value: '100'
	                  },  
	                  {
	                    type: 'textbox',
	                    size: 10,
	                    name: 'class',
	                    label: 'Class Attribute',
	                    value: 'responsiveIframe'
	                  }, 
	                  {
	                    type: 'textbox',
	                    size: 10,
	                    name: 'id',
	                    label: 'Id Attribute'
	                  },
	                  {
	                    type: 'textbox',
	                    multiline: true,
	                    size: 25,
	                    name: 'embedcode',
	                    label: 'Or Embed Code',
	                    placeholder: 'Paste YouTube/Vimeo/Others here...'
	                  },                 
	                ],
	                onsubmit: function(e) {
	                    var url = e.data.url;
	                    var width = e.data.width;
	                    var height = e.data.height;
	                    var classAttr = e.data.class;
	                    var idAttr = e.data.id;
	                    var iframe = e.data.embedcode;

	                    if (url.trim() == "" && iframe.trim() !== "" ) {
		                    var regEx = /(src|width|height)=["']([^"']*)["']/gi;

		                    iframe.replace(regEx, function(all, type, value) {
		                    	switch (type) {
		                    		case 'src':
		                    		url = value;
		                    		break;
		                    		case 'width':
		                    		width = value;
		                    		break;
		                    		case 'height':
		                    		height = value;
		                    		break;
		                    	}
		                    });
	                    }

	                    var code = '[iframe url="'+url+'" width="'+width+'" height="'+height+'" class="'+classAttr+'" id="'+idAttr+'"][/iframe]';

	                    editor.insertContent(code);
	                }
	            });
	        }
        }); 
    });
})();