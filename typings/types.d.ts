/** @module CBOR */
module CBOR {
   /**
    * @class BaseError
    * @extends Error
    * @param {string} message
    * @returns {string}
    */
   class BaseError extends Error {
       /**
        * @class BaseError
        * @extends Error
        * @param {string} message
        * @returns {string}
        */
       constructor(message: string);

   }

   /**
    * @class DecodeError
    * @param {string} message
    * @param {*} [extra]
    */
   class DecodeError {
       /**
        * @class DecodeError
        * @param {string} message
        * @param {*} [extra]
        */
       constructor(message: string, extra?: any);

       /** @type string */
       static INVALID_TYPE: string;

       /** @type string */
       static UNEXPECTED_EOF: string;

       /** @type string */
       static UNEXPECTED_TYPE: string;

       /** @type string */
       static INT_OVERFLOW: string;

       /** @type string */
       static TOO_LONG: string;

       /** @type string */
       static TOO_NESTED: string;

   }

   /**
    * @class Decoder
    * @param {ArrayBuffer} buffer
    * @param {Object} [config=DEFAULT_CONFIG] config
    * @returns {Decoder}
    */
   class Decoder {
       /**
        * @class Decoder
        * @param {ArrayBuffer} buffer
        * @param {Object} [config=DEFAULT_CONFIG] config
        * @returns {Decoder}
        */
       constructor(buffer: ArrayBuffer, config?: Object);

       /**
        * @param {number} x
        * @param {number} overflow
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private static _check_overflow(x: number, overflow: number): number;

       /**
        * @param {number} bytes
        * @returns {void}
        * @private
        */
       private _advance(bytes: number): void;

       /**
        * @returns {number}
        * @private
        */
       private _available(): number;

       /**
        * @param {number} bytes
        * @param {closureCallback} closure
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private _read(bytes: number, closure: closureCallback): number;

       /**
        * @returns {number}
        * @private
        */
       private _u8(): number;

       /**
        * @returns {number}
        * @private
        */
       private _u16(): number;

       /**
        * @returns {number}
        * @private
        */
       private _u32(): number;

       /**
        * @returns {number}
        * @private
        */
       private _u64(): number;

       /**
        * @returns {number}
        * @private
        */
       private _f32(): number;

       /**
        * @returns {number}
        * @private
        */
       private _f64(): number;

       /**
        * @param {number} minor
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private _read_length(minor: number): number;

       /**
        * @param {number} minor
        * @param {number} max_len
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private _bytes(minor: number, max_len: number): number;

       /**
        * @returns {Array}
        * @private
        * @throws DecodeError
        */
       private _read_type_info(): Array;

       /**
        * @param {(number|Array<number>)} expected
        * @returns {Array}
        * @private
        * @throws DecodeError
        */
       private _type_info_with_assert(expected: (number|number[])): Array;

       /**
        * @param {*} type
        * @param {number} minor
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private _read_unsigned(type: any, minor: number): number;

       /**
        * @param {number} overflow
        * @param {*} type
        * @param {*} minor
        * @returns {number}
        * @private
        * @throws DecodeError
        */
       private _read_signed(overflow: number, type: any, minor: any): number;

       /** @returns {number} */
       u8(): number;

       /** @returns {number} */
       u16(): number;

       /** @returns {number} */
       u32(): number;

       /** @returns {number} */
       u64(): number;

       /** @returns {number} */
       i8(): number;

       /** @returns {number} */
       i16(): number;

       /** @returns {number} */
       i32(): number;

       /** @returns {number} */
       i64(): number;

       /** @returns {number} */
       unsigned(): number;

       /** @returns {number} */
       int(): number;

       /** @returns {number} */
       f16(): number;

       /** @returns {number} */
       f32(): number;

       /** @returns {number} */
       f64(): number;

       /**
        * @returns {boolean}
        * @throws DecodeError
        */
       bool(): boolean;

       /**
        * @returns {number}
        * @throws DecodeError
        */
       bytes(): number;

       /**
        * @returns {string}
        * @throws DecodeError
        */
       text(): string;

       /**
        * @param {closureCallback} closure
        * @returns {(closureCallback|null)}
        * @throws DecodeError
        */
       optional(closure: closureCallback): (closureCallback|null);

       /**
        * @returns {number}
        * @throws DecodeError
        */
       array(): number;

       /**
        * @returns {number}
        * @throws DecodeError
        */
       object(): number;

       /**
        * @param {*} type
        * @private
        * @returns {void}
        * @throws DecodeError
        */
       private _skip_until_break(type: any): void;

       /**
        * @param level {number}
        * @returns {boolean}
        * @private
        * @returns {boolean}
        * @throws DecodeError
        */
       private _skip_value(level: number): boolean;

       /** @returns {boolean} */
       skip(): boolean;

   }

   /**
    * @callback closureCallback
    */
   type closureCallback = () => void;

   /**
    * @class Encoder
    * @returns {Encoder}
    */
   class Encoder {
       /**
        * @class Encoder
        * @returns {Encoder}
        */
       constructor();

       /** @returns {ArrayBuffer} */
       get_buffer(): ArrayBuffer;

       /**
        * @param {number} need_nbytes
        * @returns {void}
        * @private
        */
       private _grow_buffer(need_nbytes: number): void;

       /**
        * @param {number} bytes
        * @returns {void}
        * @private
        */
       private _ensure(bytes: number): void;

       /**
        * @param {number} bytes
        * @returns {void}
        * @private
        */
       private _advance(bytes: number): void;

       /**
        * @param {number} bytes
        * @param {closureCallback} closure
        * @returns {void}
        * @private
        */
       private _write(bytes: number, closure: closureCallback): void;

       /**
        * @param {*} type
        * @param {number} len
        * @returns {void}
        * @private
        * @throws RangeError
        */
       private _write_type_and_len(type: any, len: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _u8(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _u16(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _u32(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _u64(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _f32(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @private
        */
       private _f64(x: number): void;

       /**
        * @param {Uint8Array} x
        * @returns {void}
        * @private
        */
       private _bytes(x: Uint8Array): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       u8(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       u16(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       u32(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       u64(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       i8(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       i16(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       i32(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        * @throws RangeError
        */
       i64(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        */
       f32(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        */
       f64(x: number): void;

       /**
        * @param {number} x
        * @returns {void}
        */
       bool(x: number): void;

       /**
        * @param {ArrayBuffer|Uint8Array} x
        * @returns {void}
        */
       bytes(x: (ArrayBuffer|Uint8Array)): void;

       /**
        * @param {number} x
        * @returns {void}
        */
       text(x: number): void;

       /** @returns {void} */
       null(): void;

       /** @returns {void} */
       undefined(): void;

       /**
        * @param {number} len
        * @returns {void}
        */
       array(len: number): void;

       /** @returns {void} */
       array_begin(): void;

       /** @returns {void} */
       array_end(): void;

       /**
        * @param {number} len
        * @returns {void}
        */
       object(len: number): void;

       /** @returns {void} */
       object_begin(): void;

       /** @returns {void} */
       object_end(): void;

   }

   /** @class Types this*/
   class Types {
       /** @class Types this*/
       constructor();

       /** @type {number} */
       static ARRAY: number;

       /** @type {number} */
       static BOOL: number;

       /** @type {number} */
       static BREAK: number;

       /** @type {number} */
       static BYTES: number;

       /** @type {number} */
       static FLOAT16: number;

       /** @type {number} */
       static FLOAT32: number;

       /** @type {number} */
       static FLOAT64: number;

       /** @type {number} */
       static UINT8: number;

       /** @type {number} */
       static UINT16: number;

       /** @type {number} */
       static UINT32: number;

       /** @type {number} */
       static UINT64: number;

       /** @type {number} */
       static INT8: number;

       /** @type {number} */
       static INT16: number;

       /** @type {number} */
       static INT32: number;

       /** @type {number} */
       static INT64: number;

       /** @type {number} */
       static NULL: number;

       /** @type {number} */
       static OBJECT: number;

       /** @type {number} */
       static TAGGED: number;

       /** @type {number} */
       static TEXT: number;

       /** @type {number} */
       static UNDEFINED: number;

       /**
        * @param {*} t
        * @returns {number}
        * @throws TypeError
        */
       static major(t: any): number;

   }

}

