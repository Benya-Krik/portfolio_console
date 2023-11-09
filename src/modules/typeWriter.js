function typeWriter( obj, updateContent, callback ) {

    setTimeout(() => {
        if(obj.caretPosition < obj.text.length){
            obj.content += obj.text[obj.caretPosition];
            updateContent(obj.content);
            obj.caretPosition++;
            typeWriter( obj, updateContent, callback );
        }
        else {
            callback(true);
        }
    }, obj.speed);

}

export default typeWriter;