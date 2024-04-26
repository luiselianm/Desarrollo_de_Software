export interface INodo{
    findByCondition(predicado: (fileName: string) => boolean): INodo[];
}