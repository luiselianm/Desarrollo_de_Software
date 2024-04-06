import { Either } from "./Either";

let marcas: string[] = ['adidas', 'puma'];

let marca: string | undefined = marcas.find((marca) => marca === 'adidas')

if (marca) {
    const succeed: Either<string, undefined> = Either.createSucceed<string>(marca);
    console.log(`Tiene error: `, succeed.errorValidator());
    console.log(`Error: `, succeed.returnError());
    console.log('Succeed: ', succeed.returnSucceed());
} else {
    const error: Either<undefined, string> = Either.createError<string>('La marca no esta registrada');
    console.log(`Tiene error: `, error.errorValidator());
    console.log(`Error: `, error.returnError());
    console.log('Succeed: ', error.returnSucceed());
}