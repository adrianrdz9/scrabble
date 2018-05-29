<?php
	if(isset($_POST["q"]))
	{
		$a=$_POST["q"];
		$mas=fopen("animales.json", "r");
		$cad=fgets($mas);
		$obj=json_decode($cad);
		$r=0;
		for($i=0; $i<=2; $i++)
		{
			if($obj[$i]->nombre==$a)
			{
				echo "<table border=1>";
				echo "<tr>";
				echo "<th>Nombre</th>";
				echo "<th>Raza</th>";
				echo "<th>Edad</th>";
				echo "</tr>";
				echo "<tr>";
				echo "<td>".$obj[$i]->nombre."</td>";
				echo "<td>".$obj[$i]->raza."</td>";
				echo "<td>".$obj[$i]->edad."</td>";
				echo "</tr>";
				echo "</table>";
				$r=1;
			}
		}
		if($r!=1)
			echo "No existe esa mascota";
	}
	else
	{
		echo ("Error."); 
	}
?>
