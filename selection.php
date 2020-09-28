<?php 
	$array = array(8,2,9,6,1,7,10);
	$jumlah = 6;

	echo "Data sebelum diurut <br>";
	for ($u=0; $u<=$jumlah ; $u++) { 
		# code...
		echo $array[$u]." ";
	}

	for ($i=0; $i<=$jumlah-1 ; $i++) { 
		# code...
		$kecil = $i;
		for ($j=$i+1; $j<=$jumlah ; $j++) { 
			# code...
			if ($array[$j] < $array[$kecil]) {
				# code...
				$kecil = $j;
			}
		}
		$temp = $array[$i];
		$array[$i] = $array[$kecil];
		$array[$kecil] = $temp;
	}
	echo "<br>Data sudah diurut Asc <br>";
	for ($a=0; $a <=$jumlah ; $a++) { 
		# code...
		echo $array[$a]." ";
	}
 ?>