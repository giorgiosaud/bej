<div class="Menu">
	<div class="Menu__container">
		<div class="Menu__logo">
		<?php
		if(get_header_image()){
			$CustomHeader='<a href="/" title="Home"><img src="'.get_header_image().'" alt="'.get_bloginfo( 'title' ).'" /></a>';
		}
		else{
			$CustomHeader='<a href="/" title="Home">'.get_bloginfo( 'title' ).'</a>';	
		}
		echo $CustomHeader;
		?>
		</div>
		<div class="Menu__elements">
			<div class="Menu__element"><a href="#PrimerPaso">Primer Paso</a></div>
			<div class="Menu__element"><a href="#Nosotros">Nosotros</a></div>
			<div class="Menu__element"><a href="#Inversion">Inversión</a></div>
			<div class="Menu__element"><a href="#MatrizEstrategica">Matriz Estrategica</a></div>
			<div class="Menu__element"><a href="#Contactanos">Contáctanos</a></div>
		</div>
		<div class="Menu__toogler">
			<i class="fa fa-bars"></i>
		</div>
	</div>
</div>