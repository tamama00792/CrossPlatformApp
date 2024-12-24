//
//  ViewController.m
//  CrossPlatformDemo
//
//  Created by 徐冰 on 2024/11/12.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    UIButton *test = [UIButton buttonWithType:UIButtonTypeSystem];
    test.frame = CGRectMake(0, 0, 100, 30);
    test.center = self.view.center;
    [test setTitle:@"High Score" forState:UIControlStateNormal];
    [test addTarget:self action:@selector(highScoreButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:test];
    
}

- (void)highScoreButtonPressed:(id)sender {
    NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                  moduleName: @"RNPDDHomePage"
                           initialProperties:
                             @{}
                               launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}

@end
