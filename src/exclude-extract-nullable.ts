export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

type NonFunctionTypes = Exclude<SomeTypes, DebugType>;
type NonFunctionTypes2 = Exclude<SomeTypes, Function>;
// ⬆︎上記二つは同意

// ⬆︎excludeによってユニオン型から特定の型を除外できる

type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypesByExtract = Extract<SomeTypes, Function>;
// ⬆︎extractによってユニオン型から特定の型だけを抽出できる

type NullableTypes = string | number | DebugType | null;
type NonNullableTypes = NonNullable<NullableTypes>;
// ⬆︎NonNullableによってユニオン型からnull型だけを除外できる
