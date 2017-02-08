class FancyMatch {
    constructor(string,seprator="."){
        this.String = string;
        this.Seprator = seprator;
    }
    match(InputExpression){
        var ExpressionArray =InputExpression.split(this.Seprator);
        var StringArray = this.String.split(this.Seprator)
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