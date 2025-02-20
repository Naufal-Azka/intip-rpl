<?php
// Koneksi ke database
$conn = new mysqli("localhost", "root", "", "db_intiprpl");

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// ID hari Senin (misalnya id_hari = 1)
$id_hari = 1;

// Ambil daftar ruangan
$sql_ruangan = "SELECT id_lab, nama FROM tb_lab";
$result_ruangan = $conn->query($sql_ruangan);
$ruangan_list = [];
while ($row = $result_ruangan->fetch_assoc()) {
    $ruangan_list[] = $row;
}

// Ambil daftar jam pelajaran untuk hari Senin
$sql_jam = "SELECT id_jamPelajaran, waktu_mulai, waktu_selesai FROM tb_jamPelajaran WHERE id_hari = $id_hari ORDER BY id_jamPelajaran";
$result_jam = $conn->query($sql_jam);
$jam_list = [];
while ($row = $result_jam->fetch_assoc()) {
    $jam_list[] = $row;
}

?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jadwal Ruangan Hari Senin</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }

        th {
            background-color: #f2f2f2;
        }

        .isi {
            background-color: red;
            color: white;
        }

        .kosong {
            background-color: green;
            color: white;
        }
    </style>
</head>

<body>
    <?php foreach ($ruangan_list as $ruangan): ?>
        <h3><?= $ruangan['nama']; ?></h3>
        <table>
            <tr>
                <th>Jam</th>
                <th>Status</th>
            </tr>

            <?php foreach ($jam_list as $jam): ?>
                <?php
                // Ambil status ruangan di jam tertentu
                $sql_jadwal = "SELECT k.nama_kelas, j.status 
                           FROM tb_jadwal j
                           LEFT JOIN tb_kelas k ON j.id_kelas = k.id_kelas
                           WHERE j.id_hari = $id_hari 
                           AND j.id_lab = " . (int)$ruangan['id_lab'] . " 
                           AND j.id_jamPelajaran = " . (int)$jam['id_jamPelajaran'];

                $result_jadwal = $conn->query($sql_jadwal);
                $jadwal = $result_jadwal->fetch_assoc();

                // Tentukan status
                if ($jadwal) {
                    $status = "isi";
                    $kelas = $jadwal['nama_kelas'] ? $jadwal['nama_kelas'] : '';
                    $class_status = "isi"; // Warna merah
                } else {
                    $status = "kosong";
                    $kelas = "-";
                    $class_status = "kosong"; // Warna hijau
                }
                ?>

                <tr>
                    <td><?= $jam['waktu_mulai'] . " - " . $jam['waktu_selesai']; ?></td>
                    <td class="<?= $class_status; ?>"><?= $kelas . " (" . $status . ")"; ?></td>
                </tr>

            <?php endforeach; ?>

        </table>
    <?php endforeach; ?>
</body>

</html>

<?php
// Tutup koneksi database
$conn->close();
?>