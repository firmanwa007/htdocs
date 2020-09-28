<?php 
	/*$acak = array(5,3,2,7,1,8,9);
	$jumlah = 6;
	for ($i=0; $i<=$jumlah ; $i++) { 
		# code...
		for ($j=$i; $j<=$jumlah ; $j++) { 
			# code...
			if ($acak[$j]>$acak[$i]) {
				# code...
				$tmp = $acak[$i];
				$acak[$i] = $acak[$j];
				$acak[$j] =$tmp;
			}
		}
	}
	for ($a=0; $a <=$jumlah ; $a++) { 
		# code...
		echo $acak[$a];
	}*/

	$array = array(40,82,72,81,89,90,76);
	$jumlah = 6;

	echo "Data sebelum diurut <br>";
	for ($u=0; $u<=$jumlah ; $u++) { 
		# code...
		echo $array[$u]." ";
	}

	echo "<br>Data sudah diurut Asc <br>";
	for ($i=0; $i<=$jumlah-1 ; $i++) { 
		# code...
		for ($j=0; $j<=$jumlah-1 ; $j++) { 
			# code...
			if ($array[$j] > $array[$j+1]) {
				# code...
				$temp = $array[$j];
				$array[$j] = $array[$j+1];
				$array[$j+1] = $temp;
			}
		}
	}
	for ($a=0; $a <=$jumlah ; $a++) { 
		# code...
		echo $array[$a]." ";
	}
 ?>