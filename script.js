function calculatePrice() {
    var finish = document.getElementById('finish').value;
    var grade = document.getElementById('grade').value;
    var period = document.getElementById('period').value;
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    var basePrice = 1500; // 基本価格を設定

    // ここに価格計算ロジックを追加
    console.log(`仕上がり: ${finish}, グレード: ${grade}, 注文期間: ${period}, 枚数: ${quantity}`);
    // 結果を表示
    alert(`計算結果: 仕上がり: ${finish}, グレード: ${grade}, 注文期間: ${period}, 枚数: ${quantity}`);
}
