var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Students = /** @class */ (function () {
    function Students(matricula, nome) {
        this._matricula = matricula;
        this._nome = nome;
        this._prova = [];
        this._trabalho = [];
    }
    Object.defineProperty(Students.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        set: function (value) {
            this._matricula = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "name", {
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres');
            }
            else {
                this._nome = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "prova", {
        get: function () {
            return this._prova;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('O estudante só pode possuir 4 notas de prova');
            }
            else {
                this._prova = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "trabalho", {
        get: function () {
            return this._trabalho;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('O estudante só pode possuir 2 notas de trabalho');
            }
            else {
                this._trabalho = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Students.prototype.somaNotas = function () {
        var notasAgrupadas = __spreadArray(__spreadArray([], this.prova, true), this.trabalho, true);
        var soma = Math.round(notasAgrupadas.reduce(function (acc, curr) { return acc + curr; }, 0));
        return soma;
    };
    Students.prototype.mediaNotas = function () {
        var notasAgrupadas = __spreadArray(__spreadArray([], this.prova, true), this.trabalho, true);
        var media = Math.round(notasAgrupadas.reduce(function (acc, curr) { return acc + curr; }, 0) / 6);
        return media;
    };
    return Students;
}());
;
var student1 = new Students('0001', 'Maria');
student1.prova = [10, 8, 9, 10];
student1.trabalho = [5, 2];
console.log(student1);
console.log('Soma das notas das provas: ', student1.somaNotas());
console.log('Soma das notas dos trabalhos: ', student1.mediaNotas());
var student2 = new Students('0002', 'Fernanda');
student2.prova = [7, 6, 9, 10];
student2.trabalho = [5, 5];
console.log(student2);
console.log('Soma das notas das provas: ', student2.somaNotas());
console.log('Soma das notas dos trabalhos: ', student2.mediaNotas());
