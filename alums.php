<?php
	if(isset($_POST["q"]))
	{
		$a=$_POST["q"];
		if($a!="")
		{
			if(ctype_digit($a))
			{ 
					$con=mysqli_connect("localhost","root","","act16js");//$con=mysqli_connect("localhost","root","fundacion","ej");
					if(!$con)
					{
						echo mysqli_connect_error();
						echo mysqli_connect_errno();
						exit();
					}
					else
					{
						echo "<table border='1'>";
						echo "<tr>";
						echo "<th>Número de cuenta</th>";
						echo "<th>Nombre</th>";
						echo "<th>Apellido paterno</th>";
						echo "<th>Grupo</th>";
						echo "</tr>";
						//echo "va bien";
						$bus='SELECT * FROM alumnos WHERE Cuenta="'.$a.'"';
						$res=mysqli_query($con,$bus);
						echo "<tr>";
						while($row=mysqli_fetch_array($res))
						{
							for($i=0; $i<=3; $i++)
							{
								echo "<td>$row[$i]</td>";
							}
						}
						echo "</tr>";
						echo "</table>";
						mysqli_close($con);
					}
			}
			else
			{
				echo "<p>El número de cuenta que ingresaste no es un número</p>"; 
			}
		}
		else
		{
			        $con=mysqli_connect("localhost","root","","act16js");//$con=mysqli_connect("localhost","root","fundacion","ej");
					if(!$con)
					{
						echo mysqli_connect_error();
						echo mysqli_connect_errno();
						exit();
					}
					else
					{
						echo "<table border='1'>";
						echo "<tr>";
						echo "    <th>Número de cuenta</th>";
						echo "	  <th>Nombre</th>";
						echo "    <th>Apellido paterno</th>";
						echo "	  <th>Grupo</th>";
						echo "</tr>";
						$bus='SELECT * FROM alumnos';
						$res=mysqli_query($con,$bus);
						while($row=mysqli_fetch_array($res))
						{
							/*for($e=0; $e<=3; $e++)
							{*/
								echo "<tr>";
								for($i=0; $i<=3; $i++)
								{
									echo "<td>$row[$i]</td>";
								}
								echo "</tr>";
							//}
						}
						echo "</table>";
						mysqli_close($con);
					}
		}
	}
	else
	{
		echo ("Error."); 
	}
?>