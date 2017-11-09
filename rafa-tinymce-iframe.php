<?php
/**
	Plugin Name: Rafa TinyMCE Iframe
	Plugin URI: https://br.wordpress.org/plugins/rafa-tinymce-iframe/
	Description: Create button with shortcode for iframe in WordPress
	Author: Rafael Paulino
	Version: 1.0.0
	Author URI: https://rafaacademy.com
*/


add_filter( 'mce_external_plugins', 'tinymce_iframe_add_buttons' );
add_filter( 'mce_buttons', 'tinymce_iframe_register_buttons' );


function tinymce_iframe_add_buttons()
{
	$plugin_array['iframe'] = plugins_url( '/tinymce-iframe.js', __FILE__ );
	return $plugin_array;
}

function tinymce_iframe_register_buttons( $buttons )
{
    array_push( $buttons, 'iframe' );
	return $buttons;
}

function iframe_shortcode( $atts ) {
	
	$atts = shortcode_atts( array(
		'width' => '100',
		'height' => '100',
		'class' => 'responsiveIframe',
		'id' => 'iframe_'.time(),
		'url' => 'https://www.google.com'
	), $atts );

	$width = intval($atts['width']);
	$height = intval($atts['height']);
	$class = esc_attr($atts['class']);
	$id = esc_attr($atts['id']);
	$url = esc_url($atts['url']);

	$content = '<div class="iframeContainer"><iframe src="'.$url.'" width="'.$width.'" height="'.$height.'" id="'.$id.'" class="'.$class.'" frameborder="0"></iframe></div>';

	return $content;
}

add_shortcode('iframe', 'iframe_shortcode');