export {};
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

type FunctionTypesByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | DebugType | null;
type NonNullableTypes = NonNullable<NullableTypes>;
