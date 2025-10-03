const music = new Audio( "music/FIDDLIN'_AROUND.mp3" );
music.volume = 0.5;

button_play.onclick = function( )
{
  music.currentTime = 0;
  music.play( );
  console.log( "Button 'PLAY' is clicked. Audio is playing." );

  return;
}

button_pause.onclick = function( )
{
  music.pause( );
  console.log( "Button 'PAUSE' is clicked. Audio has paused just now." );

  return;
}

button_resume.onclick = function( )
{
  music.play( );
  console.log( "Button 'RESUME' is clicked. Audio has resumed just now." );

  return;
}

var volume_slider = document.getElementById( "input_range_volume" );
volume_slider.oninput = function( )
{
  music.volume = document.getElementById( "input_range_volume" ).value / 100.0;

  return;
}
