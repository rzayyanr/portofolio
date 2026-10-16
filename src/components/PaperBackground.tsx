/**
 * Lapisan kertas di belakang seluruh halaman: grid kotak 28px, titik spiral di
 * tepi kiri, dan garis margin merah. Diposisikan fixed supaya kertasnya terasa
 * seperti satu lembar yang diam saat konten menggulir di atasnya.
 */
export default function PaperBackground() {
  return (
    <div aria-hidden="true" className="paper">
      <span className="paper-grid" />
      <span className="paper-spiral" />
      <span className="paper-margin" />
    </div>
  );
}
