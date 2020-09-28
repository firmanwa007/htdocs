<?php 
	$array = array(8,2,9,6,1,7,10);
	$jumlah = 6;


	echo "Data sebelum diurut <br>";
	for ($u=0; $u<=$jumlah ; $u++) { 
		# code...
		echo $array[$u]." ";
	}

	for ($i=0; $i<=$jumlah ; $i++) { 
		# code...
		$masukan = $array[$i];
		$awal = $i;
		while ($awal > 0 and $array[$awal-1] > $masukan) {
			# code...
			$array[$awal] = $array[$awal-1];
			$awal = $awal-1;
		}
		$array[$awal] = $masukan;
	}

	echo "<br>Data sudah diurut Asc <br>";
	for ($a=0; $a <=$jumlah ; $a++) { 
		# code...
		echo $array[$a]." ";
	}
?>