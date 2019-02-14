import { Context } from '@microsoft/mixed-reality-extension-sdk';
export default class Demo {
    private context;
    private baseUrl;
    private assetGroup;
    private lastUser;
    private isCesiumManWalking;
    private cabinActor;
    private skullActor;
    private sphereActorPromises;
    private videoPlayerManager;
    private logActor;
    constructor(context: Context, baseUrl: string);
    private started;
    private userJoined;
    private addToLog;
    private loadMaterials;
    setupScene(): Promise<void>;
    private setupCesiumMan;
    private setupSkull;
    setupSpheres(): Promise<void>;
    setupLight(): Promise<void>;
    private setupTeleporter;
    private setupVideoPlayer;
    private setupSphereActors;
    private generateSpinKeyframes;
    private expandAnimationData;
    private contractAnimationData;
}
//# sourceMappingURL=app.d.ts.map