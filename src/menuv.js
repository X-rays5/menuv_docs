import Menu from './classes/menu';

/**
 * Object
 * @typedef {object} table
 */
/**
 * List of threads
 * @typedef {number[]} threads
 */

/**
 * CreateMenu options
 * 
 * @access protected
 * @typedef {object} CreateMenu~options
 * 
 * @param {string} [options.namespace=unknown]
 *        Namespace is required to set keybinds, make sure given namespace is unique for every menu.
 * @param {boolean|string} [options.title=MenuV]
 *        Title that appears on the big banner.
 * @param {string} [options.subtitle=""]
 *        Subtitle that appears in capital letters in a small black bar.
 * @param {string} [options.position="topleft"]
 *        Menu position on screen
 *         
 *         
 *        <strong>options:</strong> 
 * 
 *        `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
 * @param {number} [options.r=0]
 *        Primary color `RGB` red channel [0-255]
 * @param {number} [options.g=0]
 *        Primary color `RGB` green channel [0-255]
 * @param {number} [options.b=255]
 *        Primary color `RGB` blue channel [0-255]
 * @param {string} [options.size=size-110]
 *        Menu size in %
 * 
 * 
 *        <strong>options:</strong> 
 * 
 *        `size-100` | `size-110` | `size-125` | `size-150` | `size-175` | `size-200`
 * @param {string} [options.dictionary=menuv]
 *        Texture dictionary name for the banner image
 * @param {string} [options.texture=default]
 *        Texture name for the banner image
 * @param {table} [options.events={}]
 *        Custom events to add
 * @param {function} [options.validate=nil]
 *        Custom {@link #Menu.Validate|Menu.Validate} function
 * @param {function} [options.newIndex=nil]
 *             Custom {@link #Menu.NewIndex|Menu.NewIndex} function
 */

/**
 * MenuV library
 * @name MenuV
 * @alias MenuV
 * @class MenuV
 * @namespace MenuV
 */
class MenuV {
    /**
     * Class name of {@link #MenuV|MenuV}
     * @memberof MenuV
     * @access protected
     * @private
     * @readonly
     * @type {string}
     * @default 'MenuV'
     */
    __class = 'MenuV';

    /**
     * Defined type of {@link #MenuV|MenuV}
     * @memberof MenuV
     * @access protected
     * @private
     * @readonly
     * @type {string}
     * @default 'MenuV'
     */
    __type = 'MenuV';

    /**
     * Create a `MenuV` menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV
     * @param {string|boolean} [title='MenuV']
     *        Title that appears on the big banner.
     * @param {string} [subtitle='']
     *        Subtitle that appears in capital letters in a small black bar.
     * @param {string} [position='topleft']
     *        Menu position on screen
     *        
     *        
     *        <strong>options:</strong> 
     *        
     *        `topleft` | `topcenter` | `topright` | `centerleft` | `center` | `centerright` | `bottomleft` | `bottomcenter` | `bottomright`
     * @param {number} [r=0]
     *        Primary color <strong>RGB</strong> red channel [0-255]
     * @param {number} [g=0]
     *        Primary color <strong>RGB</strong> green channel [0-255]
     * @param {number} [b=255]
     *        Primary color <strong>RGB</strong> blue channel [0-255]
     * @param {string} [size='size-110']
     *        Menu size in %
     *        
     *        
     *        <strong>options:</strong> 
     *        
     *        `size-100` | `size-110` | `size-125` | `size-150` | `size-175` | `size-200`
     * @param {string} [texture='default']
     *        Texture name for the banner image
     * @param {string} [dictionary='menuv']
     *        Texture dictionary name for the banner image
     * @param {string} [namespace='unknown']
     *         Namespace is required to set keybinds, make sure given namespace is unique for every menu.
     * @returns {Menu}
     */
    CreateMenu(MenuV, title, subtitle, position, r, g, b, size, texture, dictionary, namespace) {};

    /**
     * Returns created menu matching `UUID`
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV
     * @param {string} uuid Universally Unique Identifier (UUID)
     * @returns {Menu|null} Returns matching menu or `nil`
     */
    GetMenu(MenuV, uuid) {};

    /**
     * Open a menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} [callback] Trigger callback when function has been executed
     */
    OpenMenu(MenuV, menu, callback) {};

    /**
     * Close a menu
     * @memberof MenuV
     * @access public
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} [callback] Trigger callback when function has been executed
     */
    CloseMenu(MenuV, menu, callback) {};

    /**
     * Register keybind for specific menu, a unqiue {@link #Menu.Namespace|Menu.Namespace} is required
     * @memberof MenuV
     * @access protected
     * @param {MenuV} MenuV 
     * @param {Menu|string} menu Menu or Universally Unique Identifier (UUID)
     * @param {function} func Trigger this function when button has been pressed
     * @param {string} description Description in FiveM keybinds
     * @param {string} defaultType Default input type, like: KEYBOARD, MOUSE_BUTTON etc.
     * @param {string} defaultKey Default input button, like: E, F12, LEFT_BUTTON etc.
     */
    AddControlKey(MenuV, menu, func, description, defaultType, defaultKey) {};
}

/**
 * Register callback handler for MenuV
 * @global
 * @access protected
 * @namespace exports.NUICallback
 * @exports NUICallback
 * @param {string} name Name of NUI callback
 * @param {table} info Information from NUI
 * @param {function} callback NUI callback function
 */
export default NUICallback = function(name, info, callback) {
}