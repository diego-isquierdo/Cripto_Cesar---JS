function criaArquivo(answerJSON){
    var fileWriter = new Writer();
	var text = "This is a test string";
    var fileName = "answer.json";

	fileWriter.writeToFile("sfopera.com", answerJSON, fileName, function(err,url) {
		if (err) {
			resp.error("Write failed");
		} else {
			resp.success(url);
		}
	});

file_writer
}