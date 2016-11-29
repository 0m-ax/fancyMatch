class FancyMatch {
    constructor(string){
        this.String = string;
    }
    match(InputMatch){
        var ExpressionArray =InputExpression.split('.');
        var StringArray = this.String.split('.')
        return FancyMatch._internal(StringArray,ExpressionArray)
    }
    static _internal(StringArray,ExpressionArray){
        if(StringArray.length == 0){
            return true;
        }
        if(ExpressionArray.length ==0){
            return false;
        }
        var CurrentExpressionPart = ExpressionArray.shift();
        var CurrentStringPart = StringArray.shift();
        if(CurrentExpressionPart == "*"){
            return FancyMatch._internal(StringArray,ExpressionArray)
        }else if(CurrentExpressionPart == "**"){
            return true;
        }else if(CurrentStringPart == CurrentExpressionPart){
            return FancyMatch._internal(StringArray,ExpressionArray)
        }else{
            return false;
        }
    }
}
module.exports = FancyMatch;