const init = (registerNotify, serviceResolver, config) => {
    plugin.onLoad(serviceResolver, config);
    return plugin;
};

const plugin = {
    author: 'szir',
    version: '1.0',
    name: 'Util Commands Plugin',
    enabled: true,
    manager: null,
    logger: null,
    config: null,
    serviceResolver: null,
    commands: null,
    
    config: {
        enabled: true, // indicates if the plugin is enabled
    },

    onLoad: function (serviceResolver, config) {
        this.serviceResolver = serviceResolver;
        this.config = config;
        this.commands = commands;
        this.eventManager = serviceResolver.resolveService('IManager');
        this.logger = this.serviceResolver.resolveService('ILogger', ['ScriptPluginV2']);
        this.logger.logInformation('{Name} {Version} by {Author} loaded. Enabled={Enabled}', this.name, this.version,
            this.author, this.enabled);
    },

    requestExecuteCommand: function (command, server) {
        const serverEvents = importNamespace('SharedLibraryCore.Events.Server');
        const requestEvent = new serverEvents.ServerCommandRequestExecuteEvent(command, server);
        requestEvent.timeoutMs = 2000;
        requestEvent.source = this.name;

        // queue our request on the event manager
        this.eventManager.queueEvent(requestEvent);
    }
}

const commands = [
    {
        name: 'fps',
        description: 'enables/disables fullbright',
        alias: 'fps',
        permission: 'User',
        targetRequired: false,
        execute: (gameEvent) => {
            plugin.requestExecuteCommand(`cmd fps:${gameEvent.Origin.ClientNumber}`, gameEvent.owner);
            gameEvent.origin.tell(`Toggling FullBright`);
        }
    },

];

